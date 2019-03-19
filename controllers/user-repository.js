import db from '../models';

export default class UserRepository {

    fetchAll() {
        return db.User.findAll();
    }
}