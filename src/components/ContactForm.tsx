import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Upload, ArrowUpRight } from "lucide-react";

const contactSchema = z.object({
  name: z.string().trim().min(1, { message: "Vārds ir obligāts" }).max(100, { message: "Vārds nedrīkst būt garāks par 100 rakstzīmēm" }),
  email: z.string().trim().email({ message: "Nederīga e-pasta adrese" }).max(255, { message: "E-pasts nedrīkst būt garāks par 255 rakstzīmēm" }),
  phone: z.string().trim().min(1, { message: "Telefons ir obligāts" }).max(50, { message: "Telefons nedrīkst būt garāks par 50 rakstzīmēm" }),
  message: z.string().trim().min(1, { message: "Ziņojums ir obligāts" }).max(2000, { message: "Ziņojums nedrīkst būt garāks par 2000 rakstzīmēm" }),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const { toast } = useToast();
  const [files, setFiles] = useState<File[]>([]);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles([...files, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Here you would typically send the form data to your backend
      console.log("Form data:", data);
      console.log("Files:", files);
      
      toast({
        title: "Ziņojums nosūtīts!",
        description: "Mēs sazināsimies ar jums drīzumā.",
      });
      
      reset();
      setFiles([]);
    } catch (error) {
      toast({
        title: "Kļūda",
        description: "Neizdevās nosūtīt ziņojumu. Lūdzu, mēģiniet vēlreiz.",
        variant: "destructive",
      });
    }
  };

  const buttonBase =
    "group relative inline-flex items-center justify-center " +
    "h-11 px-6 md:px-8 rounded-lg font-sans font-bold " +
    "shadow-sm hover:shadow-md transition ease-out duration-200 " +
    "hover:scale-[1.02] active:scale-[0.97] " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary/40 " +
    "overflow-hidden";
  const shimmer =
    "before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r " +
    "before:from-transparent before:via-white/20 before:to-transparent " +
    "group-hover:before:translate-x-full before:transition-transform before:duration-700";
  const ctaClass = `bg-primary text-primary-foreground ${buttonBase} ${shimmer}`;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto bg-background border border-border p-8 animate-fade-in">
      <div className="space-y-6">
        <div>
          <Label htmlFor="name" className="font-sans text-foreground">Vārds *</Label>
          <Input
            id="name"
            type="text"
            {...register("name")}
            className="mt-2"
            placeholder="Jūsu vārds"
          />
          {errors.name && (
            <p className="text-sm text-destructive mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="email" className="font-sans text-foreground">E-pasts *</Label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            className="mt-2"
            placeholder="jusu@epasts.lv"
          />
          {errors.email && (
            <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="phone" className="font-sans text-foreground">Telefons *</Label>
          <Input
            id="phone"
            type="tel"
            {...register("phone")}
            className="mt-2"
            placeholder="+371 20000000"
          />
          {errors.phone && (
            <p className="text-sm text-destructive mt-1">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="message" className="font-sans text-foreground">Ziņojums / objekta apraksts *</Label>
          <Textarea
            id="message"
            {...register("message")}
            className="mt-2 min-h-[150px]"
            placeholder="Aprakstiet savu objektu un nepieciešamos darbus..."
          />
          {errors.message && (
            <p className="text-sm text-destructive mt-1">{errors.message.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="files" className="font-sans text-foreground">Pievienojiet failus (plāns, foto)</Label>
          <div className="mt-2">
            <label
              htmlFor="files"
              className="flex items-center justify-center w-full h-32 border-2 border-dashed border-border rounded-lg cursor-pointer hover:border-primary transition-colors"
            >
              <div className="flex flex-col items-center gap-2">
                <Upload className="w-8 h-8 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Noklikšķiniet vai velciet failus šeit</span>
              </div>
              <input
                id="files"
                type="file"
                multiple
                accept="image/*,.pdf,.doc,.docx"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
            {files.length > 0 && (
              <div className="mt-4 space-y-2">
                {files.map((file, index) => (
                  <div key={index} className="flex items-center justify-between p-2 bg-muted rounded">
                    <span className="text-sm font-sans text-foreground truncate">{file.name}</span>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => removeFile(index)}
                      className="text-destructive hover:text-destructive"
                    >
                      Noņemt
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-center pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className={ctaClass}
          >
            <span className="font-sans font-bold text-base">
              {isSubmitting ? "Nosūta..." : "Nosūtīt"}
            </span>
            <ArrowUpRight className="ml-2 w-5 h-5 md:w-6 md:h-6 transition-transform duration-200 ease-out group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
