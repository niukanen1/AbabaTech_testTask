import { toast, ToastOptions, UpdateOptions } from "react-toastify";
import { TypeOptions } from "react-toastify";
import { v4 as uuid } from "uuid";

export const toastDefaultProperties: UpdateOptions | ToastOptions = {
	isLoading: false,
	autoClose: 5000,
};

export class ToastInit {
	toastId: string;
	message: string;
	type: TypeOptions;
	autoClose?: number = 5000;
	isLoading?: boolean = false;
	constructor( message: string, type: TypeOptions, toastID?: string, autoClose?: number, isLoading?: boolean) {
		this.toastId = toastID ?? uuid();
        this.message = message;
		this.type = type;
		this.autoClose = autoClose;
		this.isLoading = isLoading;
	}

	activateToast() {
		toast(this.message, {
			toastId: this.toastId,
			type: this.type,
			autoClose: this.autoClose,
			isLoading: this.isLoading,
		});
	}
	updateToast(newToast: ToastInit) {
		toast.update(this.toastId, {
			render: newToast.message,
			type: newToast.type,
			isLoading: newToast.isLoading,
			autoClose: newToast.autoClose,
            
		});
	}
    dismiss() { 
        toast.done(this.toastId);
    }
}
