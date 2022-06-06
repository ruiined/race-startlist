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

  it("displays options", async () => {
    render(<Startlist />);
    await waitFor(() => {
      const print = screen.getByLabelText("print");
      expect(print).toBeInTheDocument();
    });
    await waitFor(() => {
      const print = screen.getByLabelText("Sort by");
      expect(print).toBeInTheDocument();
    });
    await waitFor(() => {
      const print = screen.getByLabelText("Reset sorting");
      expect(print).toBeInTheDocument();
    });
    await waitFor(() => {
      const print = screen.getByLabelText("filter events");
      expect(print).toBeInTheDocument();
    });
    await waitFor(() => {
      const print = screen.getByLabelText("filter organisations");
      expect(print).toBeInTheDocument();
    });
    await waitFor(() => {
      const print = screen.getByLabelText("reset filters");
      expect(print).toBeInTheDocument();
    });
  });

  it("displays the stats", async () => {
    render(<Startlist />);
    await waitFor(() => {
      const totalRevenue = screen.getByText(/Total ticket revenue:/i);
      expect(totalRevenue).toBeInTheDocument();
    });
    await waitFor(() => {
      const totalRevenueCalculation = screen.getByText(/£6,500.00/i);
      expect(totalRevenueCalculation).toBeInTheDocument();
    });
    await waitFor(() => {
      const tickets = screen.getByText(/Tickets sold:/i);
      expect(tickets).toBeInTheDocument();
    });
    await waitFor(() => {
      const averagePrice = screen.getByText(/Average ticket price:/i);
      expect(averagePrice).toBeInTheDocument();
    });
    await waitFor(() => {
      const averagePriceCalculation = screen.getByText(/£3,250.00/i);
      expect(averagePriceCalculation).toBeInTheDocument();
    });
  });

  it("displays event entries", async () => {
    render(<Startlist />);
    await waitFor(() => {
      const header = screen.getByText(/all events/i);
      expect(header).toBeInTheDocument();
    });
    await waitFor(() => {
      const firstName = screen.getByText(/asfdg/i);
      expect(firstName).toBeInTheDocument();
    });
    await waitFor(() => {
      const lastName = screen.getByText(/aasdf/i);
      expect(lastName).toBeInTheDocument();
    });
    await waitFor(() => {
      const status = screen.getByText(/asdf@asdf.asdf/i);
      expect(status).toBeInTheDocument();
    });
    await waitFor(() => {
      const raceStart = screen.getByText("12/09/2022 10:00");
      expect(raceStart).toBeInTheDocument();
    });
    await waitFor(() => {
      const ticketPrice = screen.getByText(/£4,300.00/i);
      expect(ticketPrice).toBeInTheDocument();
    });
    await waitFor(() => {
      const ticketTitle = screen.getByText(/standard entry/i);
      expect(ticketTitle).toBeInTheDocument();
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
