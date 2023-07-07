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

export interface Program {
  name: string;
  total: number;
  list: Student[];
}

export class FakeBackend {
  users: User[];
  programs: Program[];

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
}

export const backend = new FakeBackend();