import { createBrowserRouter, Navigate } from "react-router-dom";

import UserLayout from "../components/layout/UserLayout";
import AdminLayout from "../components/layout/AdminLayout";
import ProtectedRoute from "../components/common/ProtectedRoute";

import Home from "../pages/user/Home";
import Events from "../pages/user/Events";
import EventDetailsPage from "../pages/user/EventDetailsPage";
import SeatSelectionPage from "../pages/user/SeatSelectionPage";
import CheckoutPage from "../pages/user/CheckoutPage";
import PaymentStatusPage from "../pages/user/PaymentStatusPage";
import TicketPage from "../pages/user/TicketPage";
import Login from "../pages/user/Login";
import Signup from "../pages/user/Signup";
import MyBookings from "../pages/user/MyBookings";

import AdminLogin from "../pages/admin/AdminLogin";
import Dashboard from "../pages/admin/Dashboard";
import AdminEvents from "../pages/admin/AdminEvents";
import CreateEvent from "../pages/admin/CreateEvent";
import EditEvent from "../pages/admin/EditEvent";
import AdminBookings from "../pages/admin/AdminBookings";
import AdminAnalytics from "../pages/admin/AdminAnalytics";

import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "events", element: <Events /> },
      { path: "events/:id", element: <EventDetailsPage /> },
      { path: "events/:id/seats", element: <SeatSelectionPage /> },
      { path: "checkout", element: <CheckoutPage /> },
      { path: "payment-status", element: <PaymentStatusPage /> },
      { path: "ticket/:bookingId", element: <TicketPage /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
      {
        path: "my-bookings",
        element: (
          <ProtectedRoute allowedRole="user">
            <MyBookings />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/admin/login",
    element: <AdminLogin />,
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute allowedRole="admin">
        <AdminLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Dashboard /> },
      { path: "events", element: <AdminEvents /> },
      { path: "events/new", element: <CreateEvent /> },
      { path: "events/:id/edit", element: <EditEvent /> },
      { path: "bookings", element: <AdminBookings /> },
      { path: "analytics", element: <AdminAnalytics /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);