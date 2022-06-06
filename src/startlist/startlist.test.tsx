import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import axios, { AxiosResponse } from "axios";
import Startlist from "./startlist";
import { entries } from "../testMock";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Startlist", () => {
  beforeEach(() => {
    const mockedResponse: AxiosResponse = {
      data: entries,
      status: 200,
      statusText: "OK",
      headers: {},
      config: {},
    };
    mockedAxios.get.mockResolvedValueOnce(mockedResponse);
  });

  it("displays event entries", async () => {
    render(<Startlist />);
    await waitFor(() => {
      const header = screen.getByText(/all events/i);
      expect(header).toBeInTheDocument();
    });
    await waitFor(() => {
      const entry = screen.getByText(/asfdg/i);
      expect(entry).toBeInTheDocument();
    });
  });
});

describe("No entries", () => {
  beforeEach(() => {
    const mockNoEntriesResponse: AxiosResponse = {
      data: null,
      status: 200,
      statusText: "OK",
      headers: {},
      config: {},
    };
    mockedAxios.get.mockResolvedValueOnce(mockNoEntriesResponse);
  });

  it("displays a message when there are no entries", async () => {
    render(<Startlist />);
    await waitFor(() => {
      const message = screen.getByText(/no entries/i);
      expect(message).toBeInTheDocument();
    });
  });
});
