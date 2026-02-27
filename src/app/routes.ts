import { createBrowserRouter } from "react-router";
import { Layout } from "./components/layout/Layout";
import { OverviewPage } from "./pages/OverviewPage";
import { ColorsPage } from "./pages/ColorsPage";
import { TypographyPage } from "./pages/TypographyPage";
import { SpacingPage } from "./pages/SpacingPage";
import { ButtonPage } from "./pages/ButtonPage";
import { InputPage } from "./pages/InputPage";
import { BadgePage } from "./pages/BadgePage";
import { CardPage } from "./pages/CardPage";
import { AvatarPage } from "./pages/AvatarPage";
import { CheckboxPage } from "./pages/CheckboxPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: OverviewPage },
      { path: "foundation/colors", Component: ColorsPage },
      { path: "foundation/typography", Component: TypographyPage },
      { path: "foundation/spacing", Component: SpacingPage },
      { path: "components/button", Component: ButtonPage },
      { path: "components/input", Component: InputPage },
      { path: "components/badge", Component: BadgePage },
      { path: "components/card", Component: CardPage },
      { path: "components/avatar", Component: AvatarPage },
      { path: "components/checkbox", Component: CheckboxPage },
    ],
  },
]);
