import {setUserInfo, generateToken} from './auth';

const login = (req, res) => {
    const userInfo = setUserInfo(req.user);

    res.status(200).json({
        token: `JWT${generateToken(userInfo)}`,
        user: userInfo
    });
};

export default login;
