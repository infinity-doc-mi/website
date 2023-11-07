import { Button, Sheet, tm } from '@src/components'
import { MenuIcon, XIcon } from 'lucide-react'
import { useState, useEffect } from 'react'

const menu = [
  {
    title: 'Come funziona',
    href: 'come-funziona',
  },
  {
    title: 'I nostri servizi',
    href: 'servizi',
  },
]

export function Header() {
  const dir = useScrollDirection()

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div
      className={tm(
        'fixed top-0 z-50 h-20 w-full bg-brand/90 py-5 backdrop-blur-sm transition-all',
        dir === 'down' && '-top-20',
      )}
    >
      <Sheet>
        <header className="flex h-full items-center justify-between px-10 lg:container">
          <div className="flex items-center gap-20">
            <a href="/">
              <div className="flex items-center gap-3">
                <img
                  src="/assets/infinity-doc-logo-white.svg"
                  alt=""
                  className="w-10"
                />
                <span className="font-semibold tracking-wider text-white md:text-xl">
                  InfinityDoc
                </span>
              </div>
            </a>
            <div className="hidden gap-7 lg:flex">
              {menu.map(item => (
                <button
                  key={item.title}
                  className="text-xl text-white transition-colors"
                  onClick={() => scrollTo(item.href)}
                >
                  {item.title}
                </button>
              ))}
            </div>
          </div>
          <div className="hidden lg:block">
            <Button
              asChild
              size="lg"
              className="bg-white text-lg text-brand hover:bg-white/90"
            >
              <a href="/contattaci">Contattaci</a>
            </Button>
          </div>
          <Sheet.Trigger className="rounded-full bg-white p-2 lg:hidden">
            <MenuIcon className="text-brand" />
          </Sheet.Trigger>
          <Sheet.Content side="right" className="bg-white">
            <div className="flex flex-col gap-10">
              <div className="flex justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src="/assets/infinitydoc-logo-brand.svg"
                    alt=""
                    className="w-12"
                  />
                  <span className="font-extrabold tracking-wider text-brand md:text-2xl">
                    Infinitydoc
                  </span>
                </div>
                <Sheet.Close>
                  <XIcon />
                </Sheet.Close>
              </div>
              <div className="flex flex-col gap-5">
                {menu.map(item => (
                  <a
                    key={item.title}
                    href={item.href}
                    className="text-lg font-bold text-brand"
                  >
                    {item.title}
                  </a>
                ))}
              </div>
              <Button asChild>
                <a href="/contattaci" className="text-white">
                  Contattaci
                </a>
              </Button>
            </div>
          </Sheet.Content>
        </header>
      </Sheet>
    </div>
  )
}

const useScrollDirection = () => {
  const [direction, setDirection] = useState<'up' | 'down'>('up')
  const [lastScrollTop, setLastScrollTop] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop

      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop)

      if (scrollTop > lastScrollTop) return setDirection('down')

      return setDirection('up')
    }

    /** should be debounced */
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [lastScrollTop])

  console.log(lastScrollTop, direction)
  return direction
}
