class Note {
    constructor(task, date, time) {
        this.task = task;
        this.date = date;
        this.time = time;
    }

    toString() {
        return `---${this.task} --- ${this.date} --- ${this.time}`;
    }
 

}



