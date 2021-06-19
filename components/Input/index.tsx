interface InputProps {
  type?: 'text' | 'email' | 'password';
  placeholder: string;
}

const Input = ({ type = 'text', placeholder }: InputProps) => (
  <input
    className="block w-full border-gray-200 rounded-full focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
    type={type}
    placeholder={placeholder}
  />
);

export default Input;
