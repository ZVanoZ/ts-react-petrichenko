(() => {
    enum TransferStatus {
        Pending = "pending",
        Rejected = "rejected",
        Completed = "completed",
    }

    enum ErrorMessages {
        NotFound = "Not found: 404",
        NotEnoughSpace = "Not enough space: 507",
        Forbidden = "Forbidden: 403",
    }

    interface ITransfer {
        path: string;
        data: string[];
        date?: Date;
        start: (p: string, d: string[]) => string;
        stop: (reason: string) => string;
    }

    interface TransferError {
        message?: ErrorMessages;
    }

    // Класс должен имплементировать ITransfer и TransferError
    class SingleFileTransfer
        implements ITransfer, TransferError//
    {
        data: string[] = [];
        message?: ErrorMessages;
        path: string = '';
        transferStatus?: TransferStatus;

        // Место для реализаций
        start(
            path: string,
            data: string[]
        ): string {
            this.path = path;
            if (path.length < 2) {
                this.transferStatus = TransferStatus.Rejected;
                this.message = ErrorMessages.NotFound;
            } else if (path.length < 4) {
                this.transferStatus = TransferStatus.Pending;
                this.message = undefined;
            } else {
                this.transferStatus = TransferStatus.Completed;
                this.message = undefined;
            }
            return this.transferStatus;
        }

        // Необходимо создать метод checkTransferStatus, проверяющий состояние передачи данных
        // Можно вывести в консоль данные, можно вернуть строку
        checkTransferStatus(): void {
            if (this.transferStatus === undefined) {
                console.log("Статус отсутствует");
                return;
            }
            console.log(`Статус "${this.transferStatus}"`);
        }

        // Необходимо создать метод, который будет останавливать передачу данных
        // И возвращать строку с причиной и датой остановки (Дата в любом формате)
        stop(reason: string): string {
            this.transferStatus = TransferStatus.Rejected;
            this.message = ErrorMessages.NotEnoughSpace;
            return `SingleFileTransfer.stop ${new Date().toISOString()} Остановка по причине "${reason}"`;
        }

        // Необходимо создать метод, который будет возвращать строку, содержащую
        // Статус передачи и любое сообщение об ошибке. На ваш выбор или отталкиваться от приходящего аргумента
        // Метод может показаться странным, но может использоваться для тестов, например
        getError(): string {
            if (this.message === undefined) {
                return '';
            }
            return `Ошибка "${this.message}"`
        }

    }

    (() => {
        let fileTransfer: SingleFileTransfer = new SingleFileTransfer();
        fileTransfer.checkTransferStatus();

        fileTransfer.start('1', []);
        fileTransfer.checkTransferStatus();

        fileTransfer.start('12', []);
        fileTransfer.checkTransferStatus();

        fileTransfer.start('1234', []);
        fileTransfer.checkTransferStatus();

        console.log('stop', fileTransfer.stop('какая-то причина'));
        console.log('getError', fileTransfer.getError());
    })();
})();
