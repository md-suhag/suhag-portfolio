"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.email({ message: "Please enter a valid Email" }),
  message: z.string().min(1, {
    message: "Enter your message",
  }),
});

const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  className="dark:bg-transparent border-primary/50"
                  placeholder="Enter your name"
                  {...field}
                />
              </FormControl>
              <FormDescription className="sr-only">
                This is for entering name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  className="dark:bg-transparent border-primary/50"
                  placeholder="Enter your email"
                  {...field}
                />
              </FormControl>
              <FormDescription className="sr-only">
                This is for entering email.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  className="dark:bg-transparent border-primary/50 resize-none"
                  placeholder="Type your message here."
                  {...field}
                />
              </FormControl>
              <FormDescription className="sr-only">
                This is for entering message.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className="btn" type="submit">
          Send Message
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
