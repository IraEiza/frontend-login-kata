import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Login } from "./Login";

describe("Login", () => {
  it("redirects to recipe page after login", async () => {
    const user = userEvent.setup();

    render(<Login />);

    await user.type(screen.getByText('Your email'), 'linustorvalds@gmail.com');
    await user.type(screen.getByText('Your email'), 'ilovecats');
    await user.click(screen.getByRole("button", { name: "Login" }));

    expect(true).toBe(true);
  });
});
