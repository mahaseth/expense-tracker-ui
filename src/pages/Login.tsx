import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { useState } from "react";

interface Props {
  onLogin: () => void;
}

export default function Login({ onLogin }: Props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username && password) onLogin(); // Fake validation
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <Card title="Login" className="w-full max-w-sm shadow">
        <form className="space-y-4" onSubmit={handleLogin}>
          <span className="p-float-label w-full mb-8">
            <InputText
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full"
              autoFocus
            />
            <label htmlFor="username">Username</label>
          </span>

          <span className="p-float-label w-full">
            <Password
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              feedback={false}
              toggleMask
              inputClassName="w-full"
              className="w-full"
              style={{ width: "100%" }} // ✅ force outer width
              inputStyle={{ width: "100%" }}
            />
            <label htmlFor="password">Password</label>
          </span>

          <Button
            label="Login"
            icon="pi pi-sign-in"
            className="w-full"
            type="submit"
          />
        </form>
      </Card>
    </div>
  );
}
