export class Client {
    id!: number;
    sharedKey!: string;
    name!: string;
    phone!: string;
    email!: string;
    startDate: Date = new Date();
    endDate: Date = new Date();
    createAt: Date = new Date();
    updateAt: Date = new Date();
}