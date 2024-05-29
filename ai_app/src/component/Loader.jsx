import React from 'react'

const Loader = () => {
  return (
    <div class=" shadow rounded-md p-4 max-w-4xl w-full mx-auto">
  <div class="animate-pulse flex space-x-4">
    <div class="flex-1 space-y-6 py-1">
      <div class="h-3 bg-slate-700 rounded"></div>
      <div class="space-y-3">
        <div class="grid grid-cols-3 gap-4">
          <div class="h-3 bg-slate-700 rounded col-span-2"></div>
          <div class="h-3 bg-slate-700 rounded col-span-1"></div>
        </div>
        <div class="h-3 bg-slate-700 rounded"></div>
        <div class="grid grid-cols-3 gap-4">
          <div class="h-3 bg-slate-700 rounded col-span-1"></div>
          <div class="h-3 bg-slate-700 rounded col-span-3"></div>
        </div>
        <div class="grid grid-cols-3 gap-4">
          <div class="h-3 bg-slate-700 rounded col-span-2"></div>
          <div class="h-3 bg-slate-700 rounded col-span-1"></div>
        </div>\
        <div class="grid grid-cols-3 gap-4">
          <div class="h-3 bg-slate-700 rounded col-span-1"></div>
          <div class="h-3 bg-slate-700 rounded col-span-2"></div>
        </div>
        <div class="grid grid-cols-3 gap-4">
          <div class="h-3 bg-slate-700 rounded col-span-3"></div>
          <div class="h-3 bg-slate-700 rounded col-span-1"></div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Loader