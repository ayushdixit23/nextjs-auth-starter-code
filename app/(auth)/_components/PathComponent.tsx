"use client";
import { usePathname } from "next/navigation";
import React from "react";

const PathComponent = () => {
    const path = usePathname();
    return <>{path === "/login" ? "Login" : "Create Account"}</>;
};

export default PathComponent;
