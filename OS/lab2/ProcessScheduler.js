/** Процесс, он решается за некоторое время **/
export class Process {
	/**
	 * создание процесса
	 * @param {number} time - время, за которое решается процесс
	 */
	constructor(time = 1) {
		this.time = time;
	}
}


/** Планировщик процессов / болванка, которая ничего не умеет / псевдокласс **/
export class ProcessScheduler {
	constructor() {
		this.jobs = [];
	}
	
	/**
	 * решение процессов за некоторое время
	 * @param {number} time - время, отведённое на решение процессов
	 * @return {number} оставшееся время после завершения процесса
	 **/
	process(time = 0) {
		return time;
	}
}
