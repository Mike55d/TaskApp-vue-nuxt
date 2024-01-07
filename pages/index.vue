<template>
	<div>
		<v-container>
			<v-card color="indigo" min-height="500">
				<template v-slot:title>
					<h3 class="text-center">Task App</h3>
				</template>
				<v-container>
					<v-row>
						<v-col md="6">
							<v-card>
								<Form />
							</v-card>
						</v-col>
						<v-col md="6">
							<v-card class="bg-list">
								<List />
							</v-card>
						</v-col>
					</v-row>
				</v-container>
			</v-card>
		</v-container>

	</div>
</template>