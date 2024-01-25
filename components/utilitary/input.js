import React from "react";

export default function Input({
  label,
  placeholder,
  name,
  type,
  id,
  options,
  onChange,
  value,
}) {
  if (type === "select") {
    return (
      <div className="flex flex-col gap-1 w-full">
        <label className="font-medium" htmlFor={name}>
          {label}
        </label>
        <select
          className="border-none px-4 py-2 w-full outline outline-2 outline-neutral-200 focus:outline-main "
          name={name}
          value={value}
          onChange={onChange}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="font-medium" htmlFor={name}>
        {label}
      </label>
      <input
        className="px-4 py-2 w-full outline outline-2 outline-neutral-200 focus:outline-main "
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
