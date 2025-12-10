import {createBrowserRouter, RouterProvider} from "react-router-dom";
import PostsPage from "../../../pages/PostsPage.tsx";
import PostDetailPage from "../../../pages/PostDetailPage.tsx";
import UserAlbumsPage from "../../../pages/UserAlbumsPage.tsx";
import AlbumPhotosPage from "../../../pages/AlbumPhotosPage.tsx";
import UserTodosPage from "../../../pages/UserTodosPage.tsx";
import UserPostsPage from "../../../pages/UserPostsPage.tsx";
import HomePage from "../../../pages/HomePage.tsx";
import MainLayout from "../../../shared/layouts/MainLayout.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "posts",
                element: <PostsPage />
            },
            {
                path: "posts/:id",
                element: <PostDetailPage />
            },
            {
                path: "users/:id/albums",
                element: <UserAlbumsPage />
            },
            {
                path: "albums/:albumId/photos",
                element: <AlbumPhotosPage />
            },
            {
                path: "users/:id/todos",
                element: <UserTodosPage />
            },
            {
                path: "users/:id/posts",
                element: <UserPostsPage />
            },
            {
                path: "*",
                element: <div>404 — Page not found</div>
            },
        ],
    },
]);

export const AppRouter = () => <RouterProvider router={router} />;