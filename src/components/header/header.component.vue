<template>
	<div class="header w-full bg-white">
		<div class="container flex flex-col mx-auto">
			<div class="relative flex flex-wrap items-center justify-start w-full group py-7 shrink-0">
				<div class="nav-start mr-auto">
					<img class="h-8" :src="require('@/assets/img/logo.svg')">
				</div>
				<div class="nav-center mx-auto">
					<div class="nav-items items-center justify-between hidden gap-12 text-black md:flex">
						<a class="nav-link" href="javascript:void(0)">
							Bestellen
						</a>
						<a class="nav-link" href="javascript:void(0)">
							Katalog
						</a>
						<a class="nav-link" href="javascript:void(0)">
							Warenkorb
						</a>
					</div>
				</div>
				<div class="nav-right ml-auto">
					<div class="nav-items items-center hidden gap-8 md:flex">
						<a class="nav-link flex items-center">
							Log In
						</a>
						<a class="nav-link nav-button ">
							Sign Up
						</a>
					</div>
				</div>
				<MobileMenuComponent />
			</div>
		</div>
	</div>
</template>


<script src="./header.component.ts"></script>