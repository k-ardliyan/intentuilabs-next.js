"use client"

import { useEffect, useState } from "react"

import { ThemeSwitcher } from "@/components/theme-switcher"
import {
	IconApple,
	IconArrowUpRight,
	IconBrandGithub,
	IconBrandIntentui,
	IconChevronDown,
	IconColors,
	IconColorSwatch,
	IconCube,
	IconHome,
	IconTelephone,
} from "@intentui/icons"
import { usePathname } from "next/navigation"
import { buttonStyles, Link, Menu, Navbar } from "ui"

export function AppNavbar({ children, ...props }: React.ComponentProps<typeof Navbar>) {
	const pathname = usePathname()

	const [isOpen, setIsOpen] = useState(false)
	useEffect(() => setIsOpen(false), [pathname])
	return (
		<Navbar isSticky isOpen={isOpen} onOpenChange={setIsOpen} {...props}>
			<Navbar.Nav>
				<Navbar.Logo className="text-fg" href="/">
					<IconBrandIntentui />
				</Navbar.Logo>
				<Navbar.Section>
					<Navbar.Item isCurrent={pathname === "/"} href="/">
						<IconHome className="inline size-4 lg:hidden" />
						Home
					</Navbar.Item>
					<Navbar.Item isCurrent={pathname === "/about"} href="/about">
						<IconApple className="inline size-4 lg:hidden" />
						About
					</Navbar.Item>
					<Navbar.Item isCurrent={pathname === "/contact"} href="/contact">
						<IconTelephone className="inline size-4 lg:hidden" />
						Contact
					</Navbar.Item>
					<Navbar.Item
						target="_blank"
						href="https://blocks.intentui.com"
						className="text-primary hover:text-primary/90"
					>
						<IconTelephone className="inline size-4 lg:hidden" />
						Blocks
						<IconArrowUpRight />
					</Navbar.Item>
					<Menu>
						<Navbar.Item className="group">
							Resources...
							<IconChevronDown className="ml-2 size-4 duration-200 group-data-pressed:rotate-180" />
						</Navbar.Item>
						<Menu.Content className="sm:min-w-48">
							<Menu.Item target="_blank" href="https://intentui.com/components">
								<IconCube />
								<Menu.Label>Components</Menu.Label>
								<IconArrowUpRight className="absolute right-0" />
							</Menu.Item>
							<Menu.Item target="_blank" href="https://intentui.com/icons">
								<IconBrandIntentui />
								<Menu.Label>Icons</Menu.Label>
								<IconArrowUpRight className="absolute right-0" />
							</Menu.Item>
							<Menu.Item target="_blank" href="https://intentui.com/themes">
								<IconColors />
								<Menu.Label>Themes</Menu.Label>
								<IconArrowUpRight className="absolute right-0" />
							</Menu.Item>
							<Menu.Item target="_blank" href="https://intentui.com/colors">
								<IconColorSwatch />
								<Menu.Label>Colors</Menu.Label>
								<IconArrowUpRight className="absolute right-0" />
							</Menu.Item>
						</Menu.Content>
					</Menu>
				</Navbar.Section>
				<Navbar.Section className="hidden sm:ml-auto lg:flex">
					<Navbar.Flex className="gap-1 md:gap-1">
						<ThemeSwitcher />
						<Link
							aria-label="Goto GitHub Repository"
							className={buttonStyles({ intent: "outline", size: "square-petite" })}
							target="_blank"
							href="https://github.com/intentuilabs/next.js"
						>
							<IconBrandGithub />
						</Link>
						<Link
							aria-label="Goto intentui.com"
							className={buttonStyles({ intent: "outline", size: "square-petite" })}
							target="_blank"
							href="https://justd.co"
						>
							<IconBrandIntentui />
						</Link>
						<Navbar.Item
							className={buttonStyles({ intent: "outline", size: "small" })}
							isCurrent={pathname === "/login"}
							href="/login"
						>
							Login
						</Navbar.Item>
					</Navbar.Flex>
				</Navbar.Section>
			</Navbar.Nav>
			<Navbar.Compact>
				<Navbar.Flex>
					<Navbar.Trigger className="-ml-2" />
				</Navbar.Flex>
				<Navbar.Flex>
					<Navbar.Flex className="gap-1">
						<ThemeSwitcher />
						<Link
							aria-label="Goto GitHub Repository"
							className={buttonStyles({ intent: "outline", size: "square-petite" })}
							href="https://github.com/intentuilabs/next.js"
						>
							<IconBrandGithub />
						</Link>
						<Link
							aria-label="Goto intentui.com"
							className={buttonStyles({ intent: "outline", size: "square-petite" })}
							href="https://intentui.com"
						>
							<IconBrandIntentui />
						</Link>
						<Navbar.Item
							className={buttonStyles({ intent: "outline", size: "small" })}
							isCurrent={pathname === "/login"}
							href="/login"
						>
							Login
						</Navbar.Item>
					</Navbar.Flex>
				</Navbar.Flex>
			</Navbar.Compact>
			{children}
		</Navbar>
	)
}
