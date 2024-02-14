import { Card, CardDescription } from '@/components/ui/card'
import { Button } from './components/ui/button'
import { cn } from './utils/tailwind.utils'
import { useState } from 'react'

import { AccordionDemo } from "./demos/accordion"
import { AlertDemo } from './demos/alert'
import { AlertDialogDemo } from './demos/alert-dialog'
import { AvatarDemo } from './demos/avatar'
import { BadgeDemo } from './demos/badge'
import { CalendarDemo } from './demos/calendar'

function App() {
  const [value, setValue] = useState(0)
  return (
    <div className="p-2">
      <Card
        title="Ejemplo"
        header={
          <div>
            SubTitulo
            <CardDescription>hola</CardDescription>
          </div>
        }
        footer={
          <>
            <Button
              label="Footer"
              className={cn(
                {
                  'bg-red-500': value > 0,
                  'bg-blue-500': value > 5,
                  'bg-green-500': value > 10,
                },
              )}
              onClick={() => setValue(value + 1)}
              fullWidth
            />
            <AlertDialogDemo />
          </>
        }
      >
        <AccordionDemo />
        <AlertDemo />
        <div className="mt-4">
          <AvatarDemo />
        </div>
        <BadgeDemo />
        <CalendarDemo />
      </Card>
    </div>
  )
}

export default App
