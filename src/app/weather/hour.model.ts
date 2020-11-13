export class Hour {
    public temp_c: number;
    public temp_f: number;
    public time: string;

    constructor(temp_c: number, temp_f: number, time: string) {
        this.time = time;
        this.temp_c = temp_c;
        this.temp_f = temp_f;
    }
}