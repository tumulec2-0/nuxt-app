<template>
    <div class="antialiased bg-gray-50 dark:bg-gray-900">
        <DashboardNav />
        <DashboardSidebar />
        <main class="p-4 md:ml-64 pt-20 min-h-[72vh]">
            <table class="min-w-full bg-white dark:bg-gray-800">
                <thead>
                    <tr>
                        <th class="px-6 py-3 border-b border-gray-200 dark:border-gray-700 text-left leading-4 text-gray-500 dark:text-gray-400 tracking-wider">Dzień tygodnia</th>
                        <th class="px-6 py-3 border-b border-gray-200 dark:border-gray-700 text-left leading-4 text-gray-500 dark:text-gray-400 tracking-wider">Grzejniki</th>
                        <th class="px-6 py-3 border-b border-gray-200 dark:border-gray-700 text-left leading-4 text-gray-500 dark:text-gray-400 tracking-wider">Ogrzewanie wody</th>
                        <th class="px-6 py-3 border-b border-gray-200 dark:border-gray-700 text-left leading-4 text-gray-500 dark:text-gray-400 tracking-wider">Światła</th>
                        <th class="px-6 py-3 border-b border-gray-200 dark:border-gray-700 text-left leading-4 text-gray-500 dark:text-gray-400 tracking-wider">Klimatyzacja</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="day in daysOfWeek" :key="day">
                        <td class="px-6 py-4 border-b border-gray-200 dark:border-gray-700 text-black dark:text-white">{{ day }}</td>
                        <td class="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                            <label class="inline-flex items-center cursor-pointer">
                                <input type="checkbox" class="sr-only peer">
                                <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
                            </label>
                        </td>
                        <td class="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                            <label class="inline-flex items-center cursor-pointer">
                                <input type="checkbox" class="sr-only peer">
                                <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
                            </label>
                        </td>
                        <td class="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                            <label class="inline-flex items-center cursor-pointer">
                                <input type="checkbox" class="sr-only peer">
                                <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
                            </label>
                        </td>
                        <td class="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                            <label class="inline-flex items-center cursor-pointer">
                                <input type="checkbox" class="sr-only peer">
                                <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
                            </label>
                        </td>
                    </tr>
                </tbody>
            </table>
        </main>
    </div>
</template>

<script>

export default {
    data() {
        return {
            daysOfWeek: ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela']
        };
    }
};
</script>

<style>
/* Add any custom styles here */
</style>
