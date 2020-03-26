import express from 'express';
import KeystoreRepo from '../../../database/Repository/KeystoreRepo';
import { ProtectedRequest } from 'app-request';
import { SuccessMsgResponse } from '../../../utils/ApiResponse';
import asyncHandler from '../../../helpers/asyncHandler';

const router = express.Router();

/*-------------------------------------------------------------------------*/
// Below all APIs are private APIs protected for Access Token
router.use('/', require('../../../auth/authentication'));
/*-------------------------------------------------------------------------*/

router.delete('/',
	asyncHandler(async (req: ProtectedRequest, res, next) => {
		const keystore = await KeystoreRepo.remove(req.keystore._id);
		new SuccessMsgResponse('Logout success').send(res);
	}));

module.exports = router;