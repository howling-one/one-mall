const connections = require('../app/database');

class adminService {
  async getAdminList(admin) {
    const {
      username = '',
      name = '',
      gender = '',
      role_id = '',
      offset,
      size
    } = admin;
    const statement = `SELECT a.*,r.name as role FROM admin a LEFT JOIN
                      role r ON a.role_id = r.id WHERE a.username like
                      '%${username}%' AND a.name like '%${name}%'
                      AND a.gender like '%${gender}%' AND a.role_id like '%${role_id}%' limit ?,?`;
    const statement2 = `SELECT COUNT(*) as totalCount FROM admin
                        WHERE username like '%${username}%'
                        AND name like '%${name}%' AND gender
                        like '%${gender}%' AND role_id like '%${role_id}%'`;
    const result = await connections.execute(statement, [offset, size]);
    const result2 = await connections.execute(statement2);
    return { list: result[0], ...result2[0][0] };
  }
  async createAdmin(admin) {
    const {
      name = '',
      username = '',
      password = '',
      phone = '',
      gender = '',
      email = '',
      role_id = '',
      birthday = ''
    } = admin;
    const statement = `INSERT INTO admin (name, username,password, phone, gender, email, role_id,birthday)
                      VALUES (?,?,?,?,?,?,?,?)`;
    await connections.execute(statement, [
      name,
      username,
      password,
      phone,
      gender,
      email,
      role_id,
      birthday
    ]);
    return;
  }
  async updateAdmin(id, admin) {
    const {
      name = '',
      username = '',
      phone = '',
      gender = '',
      email = '',
      role_id = '',
      birthday = ''
    } = admin;
    const statement = `UPDATE admin SET name = ?,username=?,phone=?,gender=?,email=?,role_id=?,birthday=? WHERE id = ?`;
    await connections.execute(statement, [
      name,
      username,
      phone,
      gender,
      email,
      role_id,
      birthday,
      id
    ]);
    return;
  }
  async deleteAdmin(id) {
    const statement = `DELETE FROM admin WHERE id = ?`;
    await connections.execute(statement, [id]);
    return;
  }
}

module.exports = new adminService();
