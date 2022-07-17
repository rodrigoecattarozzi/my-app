import { forwardRef } from "react";

const FormInput = forwardRef(
    (
        { type, placeholder, onChange, onBlur, name, label, error, children },
        ref
    ) => {
        const errorClassLabel = error
            ? "block mb-2 text-sm font-medium text-red-700 dark:text-red-500"
            : "block mb-2 text-sm font-medium text-slate-900 dark:text-slate-300";

        const errorClassInput = error
            ? "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400"
            : "bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-emerald-300 focus:bg-emerald-50 focus:border-emerald-300 block w-full p-2.5 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-emerald-500 dark:focus:border-emerald-500";

        return (
            <div className="mb-6">
                <label htmlFor="email" className={errorClassLabel}>
                    {label}
                </label>

                <input
                    className={errorClassInput}
                    type={type}
                    placeholder={placeholder}
                    ref={ref}
                    onChange={onChange}
                    onBlur={onBlur}
                    name={name}
                />
                {children}
            </div>
        );
    }
);

export default FormInput;
