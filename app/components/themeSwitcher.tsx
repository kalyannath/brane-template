// app/components/ThemeSwitcher.tsx
"use client";

import { Button } from "@nextui-org/react";
import {useTheme} from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null

  return (
    <div className="flex gap-5">
      <Button isIconOnly onClick={() => setTheme('light')} className={`bg-white border-2 border-blue-400`}></Button>
      <Button isIconOnly onClick={() => setTheme('dark')} className="bg-black border-2 border-white"></Button>
      <Button isIconOnly onClick={() => setTheme('purple-dark')} className="bg-fuchsia-700 border-2 border-white"></Button>
    </div>
  )
};