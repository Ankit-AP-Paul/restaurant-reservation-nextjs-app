interface Props {
  inputs: {
    firstName: string;
    lastName: string;
    email: string;
    city: string;
    phone: string;
    password: string;
  };
  handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isSignIn: boolean;
}

export default function AuthModelInputs({
  inputs,
  handleChangeInput,
  isSignIn,
}: Props) {
  return (
    <div>
      {isSignIn ? null : (
        <div className="my-3 flex justify-between text-sm">
          <input
            className="border rounded p-2 py-3 w-[49%]"
            type="text"
            placeholder="First Name"
            value={inputs.firstName}
            onChange={handleChangeInput}
            name="firstName"
            id=""
          />
          <input
            className="border rounded p-2 py-3 w-[49%]"
            type="text"
            placeholder="Last Name"
            value={inputs.lastName}
            onChange={handleChangeInput}
            name="lastName"
            id=""
          />
        </div>
      )}
      <div className="my-3 flex justify-between text-sm">
        <input
          className="border rounded p-2 py-3 w-full"
          type="text"
          placeholder="Email"
          value={inputs.email}
          onChange={handleChangeInput}
          name="email"
          id=""
        />
      </div>
      {isSignIn ? null : (
        <div className="my-3 flex justify-between text-sm">
          <input
            className="border rounded p-2 py-3 w-[49%]"
            type="text"
            placeholder="Phone"
            value={inputs.phone}
            onChange={handleChangeInput}
            name="phone"
            id=""
          />
          <input
            className="border rounded p-2 py-3 w-[49%]"
            type="text"
            placeholder="City"
            value={inputs.city}
            onChange={handleChangeInput}
            name="city"
            id=""
          />
        </div>
      )}
      <div className="my-3 flex justify-between text-sm">
        <input
          className="border rounded p-2 py-3 w-full"
          type="password"
          placeholder="Password"
          value={inputs.password}
          onChange={handleChangeInput}
          name="password"
          id=""
        />
      </div>
    </div>
  );
}
