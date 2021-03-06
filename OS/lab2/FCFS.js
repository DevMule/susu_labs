import {ProcessScheduler} from './ProcessScheduler.js';

export class FCFS extends ProcessScheduler {
	/**
	 * решение процессов по типу FIFO,
	 * невытесняющий, то есть процесс обрабатывается пока не завершится
	 * берёт первый в очереди процесс и обрабатывает его, пока не закончился процесс
	 * @param {number} time - время, отведённое на решение процессов
	 * @param {Array<Process>} jobs - список процессов, необходимых для обработки
	 * @return {number} оставшееся время после завершения процесса
	 **/
	process(time = 0, jobs) {
		let dt;
		while (time > 0 && jobs.length) {
			
			// если процесс не завершен, продолжаем его обрабатывать
			if (!this.job || !jobs.includes(this.job)) {
				this.job = jobs[0]; // в другом случае берётся первый в списке
			}
			
			dt = Math.min(this.job.time, time);
			this.job.time -= dt;
			time -= dt;
			
			if (this.job.time <= 0) { // работа закончилась
				jobs.splice(jobs.indexOf(this.job), 1);
				this.job = null
			}
		}
		return time;
	}
}
