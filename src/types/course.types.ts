export interface ICourse {
    id: number,
    name: string,
    image: string,
}

export interface ICourseData extends Omit<ICourse, 'id'> {
}