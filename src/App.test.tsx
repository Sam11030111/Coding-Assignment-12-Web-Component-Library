import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Hero Image section", () => {
  render(<App />);
  const heroText = screen.getByText(
    /Welcome to Hung-Sheng Lee DevOps Portfolio/i,
  );
  expect(heroText).toBeInTheDocument();
});

test("renders Work section heading", () => {
  render(<App />);
  const workHeading = screen.getByRole("heading", { level: 2, name: /Work/i });
  expect(workHeading).toBeInTheDocument();
});

test("renders Skills section heading", () => {
  render(<App />);
  const skillsHeading = screen.getByRole("heading", {
    level: 2,
    name: /Skill/i,
  });
  expect(skillsHeading).toBeInTheDocument();
});

test("renders Resources section heading", () => {
  render(<App />);
  const resourcesHeading = screen.getByRole("heading", {
    level: 2,
    name: /Resource/i,
  });
  expect(resourcesHeading).toBeInTheDocument();
});

test("renders Developer Setup section heading", () => {
  render(<App />);
  const setupHeading = screen.getByRole("heading", {
    level: 2,
    name: /Developer Setup/i,
  });
  expect(setupHeading).toBeInTheDocument();
});
