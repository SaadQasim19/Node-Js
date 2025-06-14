import  express from 'express';
const router = express.Router();
import { getUsers,createUser ,updateUser , deleteUser } from '../controller/user_controller.js';


router.get('/user/:id', getUsers);
router.post('/user', createUser);
router.put('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);

export default router;