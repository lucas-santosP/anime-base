import { useUrlSearchParam } from "./useUrlSearchParam";
import { RouteLocationNormalizedLoaded, Router } from "vue-router";
import { Mock } from "vitest";
import { waitFor } from "@testing-library/vue";
let pushMock: Mock;

beforeEach(() => {
  pushMock = vi.fn((path: string) => {});

  vi.mock("vue-router", () => ({
    useRoute: vi
      .fn()
      .mockImplementation(
        () => ({ fullPath: "/", path: "/", query: {} } as Partial<RouteLocationNormalizedLoaded>)
      ),
    useRouter: vi.fn().mockImplementation(() => ({ push: pushMock })),
  }));
});

describe("useStateHistory", () => {
  it("should initialize with empty values", async () => {
    const searchParam = useUrlSearchParam("search");

    expect(searchParam.value).toBe("");
    expect(pushMock).not.toBeCalled();
  });

  it("should set a new query param value", async () => {
    const searchParam = useUrlSearchParam("search");
    searchParam.value = "naruto";

    waitFor(() => expect(pushMock).toBeCalledWith("/?search=naruto"), { interval: 500 });
  });

  it("should delete empty query param", async () => {
    const searchParam = useUrlSearchParam("search");
    searchParam.value = "naruto";
    searchParam.value = "";

    waitFor(() => expect(pushMock).toBeCalledWith("/"), { interval: 500 });
  });

  it("should sync with initial url query param", async () => {
    vi.mock("vue-router", () => ({
      useRoute: vi.fn().mockImplementation(
        () =>
          ({
            fullPath: "/",
            path: "/",
            query: { search: "naruto" },
          } as Partial<RouteLocationNormalizedLoaded>)
      ),
      useRouter: vi.fn().mockImplementation(() => ({ push: () => {} })),
    }));
    const searchParam = useUrlSearchParam("search");

    waitFor(() => expect(searchParam.value).toBe("naruto"), { interval: 500 });
  });

  it("should ignore non string query param", async () => {
    vi.mock("vue-router", () => ({
      useRoute: vi.fn().mockImplementation(
        () =>
          ({
            fullPath: "/",
            path: "/",
            query: { search: ["naruto"] },
          } as Partial<RouteLocationNormalizedLoaded>)
      ),
      useRouter: vi.fn().mockImplementation(() => ({ push: () => {} })),
    }));
    const searchParam = useUrlSearchParam("search");

    waitFor(() => expect(searchParam.value).toBe(""), { interval: 500 });
  });

  it("should update an existing query param", async () => {
    const searchParam = useUrlSearchParam("search");
    searchParam.value = "naruto";

    waitFor(() => (searchParam.value = "bleach"), { interval: 500 });
    waitFor(() => expect(pushMock).toBeCalledWith("/?search=bleach"), { interval: 500 });
  });

  it("should ignore empty updates", async () => {
    const searchParam = useUrlSearchParam("search");
    searchParam.value = "naruto";

    vi.mock("vue-router", () => ({
      useRoute: vi.fn().mockImplementation(
        () =>
          ({
            fullPath: "/",
            path: "/",
            query: {},
          } as Partial<RouteLocationNormalizedLoaded>)
      ),
      useRouter: vi.fn().mockImplementation(() => ({ push: () => {} })),
    }));
    searchParam.value = "";

    waitFor(() => expect(searchParam.value).toBe(""), { interval: 500 });
  });
});
