export class BrandModel {
    _id!: number;
    createdAt: Date | undefined;
    updatedAt: Date | undefined;
    name!: string;
    desc!: string;
    picture!: { url: string; _id: string };
    isDeleted!: boolean;
}