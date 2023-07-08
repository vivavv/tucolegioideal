export interface User {
  username: string;
  name: string;
  email: string;
  password: string;
  role: string;
  program?: string;
}

export interface Student {
  name: string;
  enrollmentDate: string;
}

export interface ClassProgram {
  name: string;
  total: number;
  list: Student[];
}

export class FakeBackend {
  users: User[];
  programs: ClassProgram[];

  constructor() {
    this.users = [
      {
        username: "Israel",
        name: "Israel Dominguez",
        email: "israel@gmail.com",
        password: "123456789",
        role: "Admin",
      },
      {
        username: "Omar32",
        name: "Omar Chavez",
        email: "omar@gmail.com",
        password: "123456789",
        role: "Profesor",
        program: "1",
      },
      {
        username: "Ricardo2",
        name: "ricardo Halen",
        email: "Ricardo@gmail.com",
        password: "123456789",
        role: "Profesor",
        program: "2",
      },
      {
        username: "Vivi",
        name: "Viviana Valentina Rodríguez",
        email: "verylongemailmadejustfortesting@gmail.com",
        password: "123456789",
        role: "Profesor",
        program: "3",
      },
      {
        username: "AdminTest",
        name: "User Admin Test",
        email: "admintest@gmail.com",
        password: "test1234",
        role: "Admin",
        program: "10",
      },
      {
        username: "ProfesorTest",
        name: "User Profesor Test",
        email: "profesortest@gmail.com",
        password: "test1234",
        role: "Profesor",
        program: "11",
      },
    ];
    this.programs = [
      {
        name: "Programa 1",
        total: 4,
        list: [
          {
            name: "Juan Pérez",
            enrollmentDate: "12/Enero/2020",
          },
          {
            name: "Lety Alarcón",
            enrollmentDate: "17/Febrero/2020",
          },
          {
            name: "Ricardo Ric",
            enrollmentDate: "19/Marzo/2020",
          },
          {
            name: "Ana Ramírez",
            enrollmentDate: "22/Abril/2020",
          },
        ],
      },
      {
        name: "Programa 2",
        total: 2,
        list: [
          {
            name: "Lety Alarcón",
            enrollmentDate: "17/Febrero/2020",
          },
          {
            name: "Ana Ramírez",
            enrollmentDate: "22/Abril/2020",
          },
        ],
      },
      {
        name: "Programa 3",
        total: 1,
        list: [
          {
            name: "Juan Pérez",
            enrollmentDate: "12/Enero/2020",
          },
        ],
      },
      {
        name: "Programa 4",
        total: 7,
        list: [
          {
            name: "Juan Pérez",
            enrollmentDate: "12/Enero/2020",
          },
          {
            name: "Lety Alarcón",
            enrollmentDate: "17/Febrero/2020",
          },
          {
            name: "Ricardo Ric",
            enrollmentDate: "19/Marzo/2020",
          },
          {
            name: "Ana Ramírez",
            enrollmentDate: "22/Abril/2020",
          },
          {
            name: "María Pérez",
            enrollmentDate: "26/Diciembre/2021",
          },
          {
            name: "Fernando López",
            enrollmentDate: "08/Agosto/2022",
          },
          {
            name: "Juana Mora",
            enrollmentDate: "07/Julio/2023",
          },
        ],
      },
      {
        name: "Programa 5",
        total: 0,
        list: [],
      },
    ];
  }

  async login(username: string, password: string) {
    const user = this.users.find(
      (user) =>
        user.username.toLowerCase() === username.toLowerCase() &&
        user.password === password
    );

    if (!user) {
      throw new Error("400");
    }

    return user;
  }

  async getUsers() {
    return [...this.users];
  }

  async deleteUser(user: User) {
    const userIndex = this.users.findIndex(
      (u) => u.username.toLowerCase() === user.username.toLowerCase()
    );

    if (userIndex !== -1) {
      this.users.splice(userIndex, 1);
    }
  }

  async editUser(username: string, newUser: User) {
    const userIndex = this.users.findIndex(
      (u) => u.username.toLowerCase() === username.toLowerCase()
    );

    if (userIndex !== -1) {
      this.users[userIndex] = newUser;
    }
  }

  async createUser(user: User) {
    this.users.push(user);
  }

  async getPrograms() {
    return [...this.programs];
  }
}

export const backend = new FakeBackend();
