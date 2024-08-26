import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../schemas/simple-links-schema';
import { ResourceNotFoundError } from '@/core/errors/errors/resource-not-found-error';
import { UserDTO, LoginUserDTO, UpdateUserDTO } from '../dto/userdto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private  userModel: Model<User>, 
  ) {}

  async create(loginUserDTO: LoginUserDTO,
   ): Promise<UserDocument> { //aqui podemos trocar por entidade ou DTO
    const nicknameExists = await this.userModel.find({nickname: loginUserDTO.nickname})
    
    //if () {}
    
    const user = await this.userModel.create(loginUserDTO);
    user.save();
    return user;
  }

  async findAll(): Promise<UserDocument[]> {
    return this.userModel.find().exec();
  }

  async findOne(id: string) {
    return this.userModel.findById(id);
  }

  async update(
     updateUserDto: UpdateUserDTO,
  ): Promise<UserDocument | null> {
    const modifyUser = await this.userModel.findOneAndUpdate(
      updateUserDto);

    if (!modifyUser) {
      throw new ResourceNotFoundError
    }

    const updatedUser = await this.userModel.findById(modifyUser)

      return updatedUser
  }

  async remove(id: string) {
    await this.userModel.deleteOne({_id: id}) 
  }

  async findByNickname(nickname: string) {
    return this.userModel.findOne({nickname: nickname})
  }
}