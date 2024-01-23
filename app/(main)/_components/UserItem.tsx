"use client"

import { useUser } from "@clerk/clerk-react"

export const UserItem = () => {

	const user = useUser()

	return (
		<div>
			{user.user?.fullName}
		</div>
	)
}