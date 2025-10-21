import { FC, ReactNode, useState } from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { cn } from '@/lib/utils';

export default function SettingsTab() {
  const [selectedLayer, setSelectedLayer] = useState('dark');
  const [selectedTheme, setSelectedTheme] = useState('dark');
  const [defaultZoom, setDefaultZoom] = useState(14);

  return (
    <div className="h-full w-full">
      {/* Settings title */}
      <div className="flex items-center justify-between pb-4">
        <p className="font-semibold text-lg">{'Settings'}</p>
      </div>

      <SeparatorLine />

      {/* 1. Operator account information */}
      <Section title="Account">
        <SettingItem label="name">John Operator</SettingItem>
        <SettingItem label="id">operator1</SettingItem>
        <SettingItem label="email">operator1@touchpulse.nl</SettingItem>
        <SettingItem label="Log out">
          <Button
            variant="outline"
            onClick={() => console.log('Log out button pressed')}
          >
            Log out
          </Button>
        </SettingItem>
      </Section>

      <SeparatorLine />

      {/* 2. Map settings */}
      <Section title="Map Settings">
        <SettingItem label="Layer">
          <SelectSetting
            value={selectedLayer}
            onValueChange={(value) => setSelectedLayer(value)}
            options={[
              { value: 'dark', label: 'Dark' },
              { value: 'light', label: 'Light' },
              { value: 'satellite', label: 'Satellite' },
            ]}
          />
        </SettingItem>
        <SettingItem label="Default zoom level">
          <Slider
            className=" w-[100]"
            defaultValue={[defaultZoom]}
            max={20}
            step={0.5}
            onValueChange={(value) => setDefaultZoom(value[0])}
          />
        </SettingItem>
      </Section>

      <SeparatorLine />

      {/* 3. Dashboard settings */}
      <Section title="Dashboard">
        <SettingItem label="Theme">
          <SelectSetting
            value={selectedTheme}
            onValueChange={(value) => setSelectedTheme(value)}
            options={[
              { value: 'dark', label: 'Dark' },
              { value: 'light', label: 'Light' },
              { value: 'system', label: 'System' },
            ]}
          />
        </SettingItem>
        <SettingItem label="Some switch setting">
          <Switch />
        </SettingItem>
      </Section>
    </div>
  );
}

const Section: FC<{ title: ReactNode; children: ReactNode }> = ({
  title,
  children,
}) => (
  <div className="pb-4">
    <h3 className="font-semibold mb-2">{title}</h3>
    <div className="flex flex-col gap-2">{children}</div>
  </div>
);

const SettingItem: FC<{
  label: ReactNode;
  children: ReactNode;
  className?: ReactNode;
}> = ({ label, children, className }) => (
  <div className="flex justify-between">
    <span>{label}</span>
    <div className={cn('font-medium', className)}>{children}</div>
  </div>
);

interface SelectSettingProps {
  value: string;
  onValueChange: (val: string) => void;
  options: { value: string; label?: string }[]; // array of options
}

const SelectSetting: FC<SelectSettingProps> = ({
  value,
  onValueChange,
  options,
}) => (
  <Select value={value} onValueChange={onValueChange}>
    <SelectTrigger className="bg-white w-full">
      <SelectValue placeholder="Select an option" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        {options.map((opt) => (
          <SelectItem key={opt.value} value={opt.value}>
            {opt.label}
          </SelectItem>
        ))}
      </SelectGroup>
    </SelectContent>
  </Select>
);

const SeparatorLine = () => (
  <div className="border-t border-gray-200 dark:border-gray-700 mb-4" />
);
