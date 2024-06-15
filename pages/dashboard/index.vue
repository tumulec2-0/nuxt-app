<template>
    <div class="antialiased bg-gray-50 dark:bg-gray-900">
        <DashboardNav />
        <DashboardSidebar />
        <main class="p-4 md:ml-64 pt-20 min-h-[72vh] flex gap-4">
            <ClientOnly>
                <ApexChart id="chart1"  />
                <ApexChart id="chart2" name="Lorem1" :data="data" :categories="data" />
            </ClientOnly>
        </main>
    </div>
</template>

<script>
import { ref } from 'vue';
let data = ref([1, 2, 3]);
</script>

