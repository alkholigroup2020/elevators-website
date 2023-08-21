<script lang="ts">
	const currentYear = () => {
		return new Date().getFullYear();
	};
</script>

<div class="section-bg h-fit flex justify-center">
	<p class="py-1 text-md text-white">
		Copyright &copy; Alkholi Group {currentYear()}
	</p>
</div>

<style>
	.section-bg {
		background: rgba(var(--color-secondary-900));
	}
</style>
