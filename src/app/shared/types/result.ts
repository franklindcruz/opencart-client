export default interface Result<T> {
    success: boolean;
    message: string | null;
    errors: string[];
    data: T;
}
