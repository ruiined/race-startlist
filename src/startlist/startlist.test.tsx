import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Startlist from "./startlist";
import axios, { AxiosResponse } from "axios";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Startlist", () => {
  beforeEach(() => {
    const entries = [
      {
        id: "61a8da5719f642320668e667",
        bookingDate: "2021-12-02T14:38:15.688Z",
        emailAddress: "asdf@asdf.asdf",
        firstName: "asfdg",
        lastName: "aasdf",
        status: "CONFIRMED",
        eventId: 18414,
        eventTitle: "The Great North Run",
        organiserTitle: "Great Run",
        organiserId: 26391,
        raceId: "jKm3jv",
        raceStartDate: "2022-09-12T09:00:00.000Z",
        raceTitle: "Half Marathon",
        ticketPrice: {
          originalValue: 4300,
          value: 4300,
          fee: 0,
          currencyCode: "GBP",
        },
        ticketId: "8907393302",
        ticketTitle: "Standard Entry",
      },
      {
        id: "6218ee9e1eccc0d3e26f0f23",
        bookingDate: "2022-02-25T14:58:38.185Z",
        emailAddress: "testuser@example.com",
        firstName: "ldtloadtestfn",
        lastName: "ldtloadtestln",
        status: "PENDING",
        eventId: 11120242,
        eventTitle: "Great North Mini & Junior",
        organiserTitle: "Great Run",
        organiserId: 26391,
        raceId: "0413441042",
        raceStartDate: "2022-09-09T23:00:00.000Z",
        raceTitle: "Junior",
        ticketPrice: {
          originalValue: 2200,
          value: 2200,
          fee: 0,
          currencyCode: "GBP",
        },
        ticketId: "3973712707",
        ticketTitle: "Junior 9-10 girls",
      },
    ];

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
      const entry = screen.getByText(/asfdg asfdg/i);
      expect(entry).toBeInTheDocument();
    });
  });
});
