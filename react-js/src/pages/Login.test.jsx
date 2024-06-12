import { describe, it, expect, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Login } from "./Login";

describe("Login", () => {
  it("redirects to recipe page after login", async () => {
    const user = userEvent.setup();
    const spy = vi.fn()

    render(<Login navigate={spy}/>);

    await user.type(screen.getByText('Your email'), 'linustorvalds@gmail.com');
    await user.type(screen.getByText('Your password'), 'ilovecats');
    await user.click(screen.getByRole("button", { name: "Login" }));

    await waitFor( () => {
      expect(spy).toHaveBeenCalledWith("/recipes")
    }, { timeout: 10000 })
  });
});
