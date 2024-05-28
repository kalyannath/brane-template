"use client";

import { Button } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { LuSunDim } from "react-icons/lu";
import { CiDark } from "react-icons/ci";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="flex gap-5">
      <Button className="text-foreground" variant="light" isIconOnly onPress={() => setTheme(theme === 'light' ? "purple-dark" : "light")}>
        {theme === 'light' ? <CiDark size={25} /> : <LuSunDim size={25} /> }
      </Button>
    </div>
  )
};