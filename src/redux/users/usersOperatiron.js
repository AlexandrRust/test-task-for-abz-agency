import { createAsyncThunk } from '@reduxjs/toolkit';
import {getUsers} from '../../api/getUsers'


const getUsersList = createAsyncThunk(
    '/users',
    async (page, thunkAPI) => {
      try {
        const {data} = await getUsers(page);
        console.log(data)
        const response = {
            totalPages: data.total_pages,
            users: data.users
        }
        return response
      } catch (error) {
        console.log(error.message);
      }
    }
  );

  const userOperation = {
    getUsersList,
  }

  export default userOperation