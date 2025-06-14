
type ErrorMessageProps = {
  children: React.ReactNode;
}

export const ErrorMessage = ({children} : ErrorMessageProps) => {
  return (
    <p className="bg-red-600 p-2 text-white font-bold text-sm text-center rounded-lg">
        {children}
    </p>
  )
}
