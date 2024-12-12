import type { Prisma } from '@prisma/client';

import { z } from 'zod';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////

/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum([
   'ReadUncommitted',
   'ReadCommitted',
   'RepeatableRead',
   'Serializable',
]);

export const TasksScalarFieldEnumSchema = z.enum([
   'id',
   'name',
   'done',
   'createdAt',
   'updatedAt',
]);

export const SortOrderSchema = z.enum(['asc', 'desc']);

export const QueryModeSchema = z.enum(['default', 'insensitive']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// TASKS SCHEMA
/////////////////////////////////////////

export const tasksSchema = z.object({
   id: z.number().int(),
   name: z.string(),
   done: z.boolean(),
   createdAt: z.coerce.date(),
   updatedAt: z.coerce.date(),
});

export type tasks = z.infer<typeof tasksSchema>;

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// TASKS
// ------------------------------------------------------

export const tasksSelectSchema: z.ZodType<Prisma.tasksSelect> = z
   .object({
      id: z.boolean().optional(),
      name: z.boolean().optional(),
      done: z.boolean().optional(),
      createdAt: z.boolean().optional(),
      updatedAt: z.boolean().optional(),
   })
   .strict();

/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const tasksWhereInputSchema: z.ZodType<Prisma.tasksWhereInput> = z
   .object({
      AND: z
         .union([
            z.lazy(() => tasksWhereInputSchema),
            z.lazy(() => tasksWhereInputSchema).array(),
         ])
         .optional(),
      OR: z
         .lazy(() => tasksWhereInputSchema)
         .array()
         .optional(),
      NOT: z
         .union([
            z.lazy(() => tasksWhereInputSchema),
            z.lazy(() => tasksWhereInputSchema).array(),
         ])
         .optional(),
      id: z.union([z.lazy(() => IntFilterSchema), z.number()]).optional(),
      name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      done: z.union([z.lazy(() => BoolFilterSchema), z.boolean()]).optional(),
      createdAt: z
         .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
         .optional(),
      updatedAt: z
         .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
         .optional(),
   })
   .strict();

export const tasksOrderByWithRelationInputSchema: z.ZodType<Prisma.tasksOrderByWithRelationInput> =
   z
      .object({
         id: z.lazy(() => SortOrderSchema).optional(),
         name: z.lazy(() => SortOrderSchema).optional(),
         done: z.lazy(() => SortOrderSchema).optional(),
         createdAt: z.lazy(() => SortOrderSchema).optional(),
         updatedAt: z.lazy(() => SortOrderSchema).optional(),
      })
      .strict();

export const tasksWhereUniqueInputSchema: z.ZodType<Prisma.tasksWhereUniqueInput> =
   z
      .object({
         id: z.number().int(),
      })
      .and(
         z
            .object({
               id: z.number().int().optional(),
               AND: z
                  .union([
                     z.lazy(() => tasksWhereInputSchema),
                     z.lazy(() => tasksWhereInputSchema).array(),
                  ])
                  .optional(),
               OR: z
                  .lazy(() => tasksWhereInputSchema)
                  .array()
                  .optional(),
               NOT: z
                  .union([
                     z.lazy(() => tasksWhereInputSchema),
                     z.lazy(() => tasksWhereInputSchema).array(),
                  ])
                  .optional(),
               name: z
                  .union([z.lazy(() => StringFilterSchema), z.string()])
                  .optional(),
               done: z
                  .union([z.lazy(() => BoolFilterSchema), z.boolean()])
                  .optional(),
               createdAt: z
                  .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
                  .optional(),
               updatedAt: z
                  .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
                  .optional(),
            })
            .strict(),
      );

export const tasksOrderByWithAggregationInputSchema: z.ZodType<Prisma.tasksOrderByWithAggregationInput> =
   z
      .object({
         id: z.lazy(() => SortOrderSchema).optional(),
         name: z.lazy(() => SortOrderSchema).optional(),
         done: z.lazy(() => SortOrderSchema).optional(),
         createdAt: z.lazy(() => SortOrderSchema).optional(),
         updatedAt: z.lazy(() => SortOrderSchema).optional(),
         _count: z.lazy(() => tasksCountOrderByAggregateInputSchema).optional(),
         _avg: z.lazy(() => tasksAvgOrderByAggregateInputSchema).optional(),
         _max: z.lazy(() => tasksMaxOrderByAggregateInputSchema).optional(),
         _min: z.lazy(() => tasksMinOrderByAggregateInputSchema).optional(),
         _sum: z.lazy(() => tasksSumOrderByAggregateInputSchema).optional(),
      })
      .strict();

export const tasksScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.tasksScalarWhereWithAggregatesInput> =
   z
      .object({
         AND: z
            .union([
               z.lazy(() => tasksScalarWhereWithAggregatesInputSchema),
               z.lazy(() => tasksScalarWhereWithAggregatesInputSchema).array(),
            ])
            .optional(),
         OR: z
            .lazy(() => tasksScalarWhereWithAggregatesInputSchema)
            .array()
            .optional(),
         NOT: z
            .union([
               z.lazy(() => tasksScalarWhereWithAggregatesInputSchema),
               z.lazy(() => tasksScalarWhereWithAggregatesInputSchema).array(),
            ])
            .optional(),
         id: z
            .union([z.lazy(() => IntWithAggregatesFilterSchema), z.number()])
            .optional(),
         name: z
            .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
            .optional(),
         done: z
            .union([z.lazy(() => BoolWithAggregatesFilterSchema), z.boolean()])
            .optional(),
         createdAt: z
            .union([
               z.lazy(() => DateTimeWithAggregatesFilterSchema),
               z.coerce.date(),
            ])
            .optional(),
         updatedAt: z
            .union([
               z.lazy(() => DateTimeWithAggregatesFilterSchema),
               z.coerce.date(),
            ])
            .optional(),
      })
      .strict();

export const tasksCreateInputSchema: z.ZodType<Prisma.tasksCreateInput> = z
   .object({
      name: z.string(),
      done: z.boolean(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
   })
   .strict();

export const tasksUncheckedCreateInputSchema: z.ZodType<Prisma.tasksUncheckedCreateInput> =
   z
      .object({
         id: z.number().int().optional(),
         name: z.string(),
         done: z.boolean(),
         createdAt: z.coerce.date().optional(),
         updatedAt: z.coerce.date().optional(),
      })
      .strict();

export const tasksUpdateInputSchema: z.ZodType<Prisma.tasksUpdateInput> = z
   .object({
      name: z
         .union([
            z.string(),
            z.lazy(() => StringFieldUpdateOperationsInputSchema),
         ])
         .optional(),
      done: z
         .union([
            z.boolean(),
            z.lazy(() => BoolFieldUpdateOperationsInputSchema),
         ])
         .optional(),
      createdAt: z
         .union([
            z.coerce.date(),
            z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
         ])
         .optional(),
      updatedAt: z
         .union([
            z.coerce.date(),
            z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
         ])
         .optional(),
   })
   .strict();

export const tasksUncheckedUpdateInputSchema: z.ZodType<Prisma.tasksUncheckedUpdateInput> =
   z
      .object({
         id: z
            .union([
               z.number().int(),
               z.lazy(() => IntFieldUpdateOperationsInputSchema),
            ])
            .optional(),
         name: z
            .union([
               z.string(),
               z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
         done: z
            .union([
               z.boolean(),
               z.lazy(() => BoolFieldUpdateOperationsInputSchema),
            ])
            .optional(),
         createdAt: z
            .union([
               z.coerce.date(),
               z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
         updatedAt: z
            .union([
               z.coerce.date(),
               z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
      })
      .strict();

export const tasksCreateManyInputSchema: z.ZodType<Prisma.tasksCreateManyInput> =
   z
      .object({
         id: z.number().int().optional(),
         name: z.string(),
         done: z.boolean(),
         createdAt: z.coerce.date().optional(),
         updatedAt: z.coerce.date().optional(),
      })
      .strict();

export const tasksUpdateManyMutationInputSchema: z.ZodType<Prisma.tasksUpdateManyMutationInput> =
   z
      .object({
         name: z
            .union([
               z.string(),
               z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
         done: z
            .union([
               z.boolean(),
               z.lazy(() => BoolFieldUpdateOperationsInputSchema),
            ])
            .optional(),
         createdAt: z
            .union([
               z.coerce.date(),
               z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
         updatedAt: z
            .union([
               z.coerce.date(),
               z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
      })
      .strict();

export const tasksUncheckedUpdateManyInputSchema: z.ZodType<Prisma.tasksUncheckedUpdateManyInput> =
   z
      .object({
         id: z
            .union([
               z.number().int(),
               z.lazy(() => IntFieldUpdateOperationsInputSchema),
            ])
            .optional(),
         name: z
            .union([
               z.string(),
               z.lazy(() => StringFieldUpdateOperationsInputSchema),
            ])
            .optional(),
         done: z
            .union([
               z.boolean(),
               z.lazy(() => BoolFieldUpdateOperationsInputSchema),
            ])
            .optional(),
         createdAt: z
            .union([
               z.coerce.date(),
               z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
         updatedAt: z
            .union([
               z.coerce.date(),
               z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
            ])
            .optional(),
      })
      .strict();

export const IntFilterSchema: z.ZodType<Prisma.IntFilter> = z
   .object({
      equals: z.number().optional(),
      in: z.number().array().optional(),
      notIn: z.number().array().optional(),
      lt: z.number().optional(),
      lte: z.number().optional(),
      gt: z.number().optional(),
      gte: z.number().optional(),
      not: z
         .union([z.number(), z.lazy(() => NestedIntFilterSchema)])
         .optional(),
   })
   .strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z
   .object({
      equals: z.string().optional(),
      in: z.string().array().optional(),
      notIn: z.string().array().optional(),
      lt: z.string().optional(),
      lte: z.string().optional(),
      gt: z.string().optional(),
      gte: z.string().optional(),
      contains: z.string().optional(),
      startsWith: z.string().optional(),
      endsWith: z.string().optional(),
      mode: z.lazy(() => QueryModeSchema).optional(),
      not: z
         .union([z.string(), z.lazy(() => NestedStringFilterSchema)])
         .optional(),
   })
   .strict();

export const BoolFilterSchema: z.ZodType<Prisma.BoolFilter> = z
   .object({
      equals: z.boolean().optional(),
      not: z
         .union([z.boolean(), z.lazy(() => NestedBoolFilterSchema)])
         .optional(),
   })
   .strict();

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z
   .object({
      equals: z.coerce.date().optional(),
      in: z.coerce.date().array().optional(),
      notIn: z.coerce.date().array().optional(),
      lt: z.coerce.date().optional(),
      lte: z.coerce.date().optional(),
      gt: z.coerce.date().optional(),
      gte: z.coerce.date().optional(),
      not: z
         .union([z.coerce.date(), z.lazy(() => NestedDateTimeFilterSchema)])
         .optional(),
   })
   .strict();

export const tasksCountOrderByAggregateInputSchema: z.ZodType<Prisma.tasksCountOrderByAggregateInput> =
   z
      .object({
         id: z.lazy(() => SortOrderSchema).optional(),
         name: z.lazy(() => SortOrderSchema).optional(),
         done: z.lazy(() => SortOrderSchema).optional(),
         createdAt: z.lazy(() => SortOrderSchema).optional(),
         updatedAt: z.lazy(() => SortOrderSchema).optional(),
      })
      .strict();

export const tasksAvgOrderByAggregateInputSchema: z.ZodType<Prisma.tasksAvgOrderByAggregateInput> =
   z
      .object({
         id: z.lazy(() => SortOrderSchema).optional(),
      })
      .strict();

export const tasksMaxOrderByAggregateInputSchema: z.ZodType<Prisma.tasksMaxOrderByAggregateInput> =
   z
      .object({
         id: z.lazy(() => SortOrderSchema).optional(),
         name: z.lazy(() => SortOrderSchema).optional(),
         done: z.lazy(() => SortOrderSchema).optional(),
         createdAt: z.lazy(() => SortOrderSchema).optional(),
         updatedAt: z.lazy(() => SortOrderSchema).optional(),
      })
      .strict();

export const tasksMinOrderByAggregateInputSchema: z.ZodType<Prisma.tasksMinOrderByAggregateInput> =
   z
      .object({
         id: z.lazy(() => SortOrderSchema).optional(),
         name: z.lazy(() => SortOrderSchema).optional(),
         done: z.lazy(() => SortOrderSchema).optional(),
         createdAt: z.lazy(() => SortOrderSchema).optional(),
         updatedAt: z.lazy(() => SortOrderSchema).optional(),
      })
      .strict();

export const tasksSumOrderByAggregateInputSchema: z.ZodType<Prisma.tasksSumOrderByAggregateInput> =
   z
      .object({
         id: z.lazy(() => SortOrderSchema).optional(),
      })
      .strict();

export const IntWithAggregatesFilterSchema: z.ZodType<Prisma.IntWithAggregatesFilter> =
   z
      .object({
         equals: z.number().optional(),
         in: z.number().array().optional(),
         notIn: z.number().array().optional(),
         lt: z.number().optional(),
         lte: z.number().optional(),
         gt: z.number().optional(),
         gte: z.number().optional(),
         not: z
            .union([
               z.number(),
               z.lazy(() => NestedIntWithAggregatesFilterSchema),
            ])
            .optional(),
         _count: z.lazy(() => NestedIntFilterSchema).optional(),
         _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
         _sum: z.lazy(() => NestedIntFilterSchema).optional(),
         _min: z.lazy(() => NestedIntFilterSchema).optional(),
         _max: z.lazy(() => NestedIntFilterSchema).optional(),
      })
      .strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> =
   z
      .object({
         equals: z.string().optional(),
         in: z.string().array().optional(),
         notIn: z.string().array().optional(),
         lt: z.string().optional(),
         lte: z.string().optional(),
         gt: z.string().optional(),
         gte: z.string().optional(),
         contains: z.string().optional(),
         startsWith: z.string().optional(),
         endsWith: z.string().optional(),
         mode: z.lazy(() => QueryModeSchema).optional(),
         not: z
            .union([
               z.string(),
               z.lazy(() => NestedStringWithAggregatesFilterSchema),
            ])
            .optional(),
         _count: z.lazy(() => NestedIntFilterSchema).optional(),
         _min: z.lazy(() => NestedStringFilterSchema).optional(),
         _max: z.lazy(() => NestedStringFilterSchema).optional(),
      })
      .strict();

export const BoolWithAggregatesFilterSchema: z.ZodType<Prisma.BoolWithAggregatesFilter> =
   z
      .object({
         equals: z.boolean().optional(),
         not: z
            .union([
               z.boolean(),
               z.lazy(() => NestedBoolWithAggregatesFilterSchema),
            ])
            .optional(),
         _count: z.lazy(() => NestedIntFilterSchema).optional(),
         _min: z.lazy(() => NestedBoolFilterSchema).optional(),
         _max: z.lazy(() => NestedBoolFilterSchema).optional(),
      })
      .strict();

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> =
   z
      .object({
         equals: z.coerce.date().optional(),
         in: z.coerce.date().array().optional(),
         notIn: z.coerce.date().array().optional(),
         lt: z.coerce.date().optional(),
         lte: z.coerce.date().optional(),
         gt: z.coerce.date().optional(),
         gte: z.coerce.date().optional(),
         not: z
            .union([
               z.coerce.date(),
               z.lazy(() => NestedDateTimeWithAggregatesFilterSchema),
            ])
            .optional(),
         _count: z.lazy(() => NestedIntFilterSchema).optional(),
         _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
         _max: z.lazy(() => NestedDateTimeFilterSchema).optional(),
      })
      .strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> =
   z
      .object({
         set: z.string().optional(),
      })
      .strict();

export const BoolFieldUpdateOperationsInputSchema: z.ZodType<Prisma.BoolFieldUpdateOperationsInput> =
   z
      .object({
         set: z.boolean().optional(),
      })
      .strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> =
   z
      .object({
         set: z.coerce.date().optional(),
      })
      .strict();

export const IntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.IntFieldUpdateOperationsInput> =
   z
      .object({
         set: z.number().optional(),
         increment: z.number().optional(),
         decrement: z.number().optional(),
         multiply: z.number().optional(),
         divide: z.number().optional(),
      })
      .strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z
   .object({
      equals: z.number().optional(),
      in: z.number().array().optional(),
      notIn: z.number().array().optional(),
      lt: z.number().optional(),
      lte: z.number().optional(),
      gt: z.number().optional(),
      gte: z.number().optional(),
      not: z
         .union([z.number(), z.lazy(() => NestedIntFilterSchema)])
         .optional(),
   })
   .strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z
   .object({
      equals: z.string().optional(),
      in: z.string().array().optional(),
      notIn: z.string().array().optional(),
      lt: z.string().optional(),
      lte: z.string().optional(),
      gt: z.string().optional(),
      gte: z.string().optional(),
      contains: z.string().optional(),
      startsWith: z.string().optional(),
      endsWith: z.string().optional(),
      not: z
         .union([z.string(), z.lazy(() => NestedStringFilterSchema)])
         .optional(),
   })
   .strict();

export const NestedBoolFilterSchema: z.ZodType<Prisma.NestedBoolFilter> = z
   .object({
      equals: z.boolean().optional(),
      not: z
         .union([z.boolean(), z.lazy(() => NestedBoolFilterSchema)])
         .optional(),
   })
   .strict();

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> =
   z
      .object({
         equals: z.coerce.date().optional(),
         in: z.coerce.date().array().optional(),
         notIn: z.coerce.date().array().optional(),
         lt: z.coerce.date().optional(),
         lte: z.coerce.date().optional(),
         gt: z.coerce.date().optional(),
         gte: z.coerce.date().optional(),
         not: z
            .union([z.coerce.date(), z.lazy(() => NestedDateTimeFilterSchema)])
            .optional(),
      })
      .strict();

export const NestedIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntWithAggregatesFilter> =
   z
      .object({
         equals: z.number().optional(),
         in: z.number().array().optional(),
         notIn: z.number().array().optional(),
         lt: z.number().optional(),
         lte: z.number().optional(),
         gt: z.number().optional(),
         gte: z.number().optional(),
         not: z
            .union([
               z.number(),
               z.lazy(() => NestedIntWithAggregatesFilterSchema),
            ])
            .optional(),
         _count: z.lazy(() => NestedIntFilterSchema).optional(),
         _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
         _sum: z.lazy(() => NestedIntFilterSchema).optional(),
         _min: z.lazy(() => NestedIntFilterSchema).optional(),
         _max: z.lazy(() => NestedIntFilterSchema).optional(),
      })
      .strict();

export const NestedFloatFilterSchema: z.ZodType<Prisma.NestedFloatFilter> = z
   .object({
      equals: z.number().optional(),
      in: z.number().array().optional(),
      notIn: z.number().array().optional(),
      lt: z.number().optional(),
      lte: z.number().optional(),
      gt: z.number().optional(),
      gte: z.number().optional(),
      not: z
         .union([z.number(), z.lazy(() => NestedFloatFilterSchema)])
         .optional(),
   })
   .strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> =
   z
      .object({
         equals: z.string().optional(),
         in: z.string().array().optional(),
         notIn: z.string().array().optional(),
         lt: z.string().optional(),
         lte: z.string().optional(),
         gt: z.string().optional(),
         gte: z.string().optional(),
         contains: z.string().optional(),
         startsWith: z.string().optional(),
         endsWith: z.string().optional(),
         not: z
            .union([
               z.string(),
               z.lazy(() => NestedStringWithAggregatesFilterSchema),
            ])
            .optional(),
         _count: z.lazy(() => NestedIntFilterSchema).optional(),
         _min: z.lazy(() => NestedStringFilterSchema).optional(),
         _max: z.lazy(() => NestedStringFilterSchema).optional(),
      })
      .strict();

export const NestedBoolWithAggregatesFilterSchema: z.ZodType<Prisma.NestedBoolWithAggregatesFilter> =
   z
      .object({
         equals: z.boolean().optional(),
         not: z
            .union([
               z.boolean(),
               z.lazy(() => NestedBoolWithAggregatesFilterSchema),
            ])
            .optional(),
         _count: z.lazy(() => NestedIntFilterSchema).optional(),
         _min: z.lazy(() => NestedBoolFilterSchema).optional(),
         _max: z.lazy(() => NestedBoolFilterSchema).optional(),
      })
      .strict();

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> =
   z
      .object({
         equals: z.coerce.date().optional(),
         in: z.coerce.date().array().optional(),
         notIn: z.coerce.date().array().optional(),
         lt: z.coerce.date().optional(),
         lte: z.coerce.date().optional(),
         gt: z.coerce.date().optional(),
         gte: z.coerce.date().optional(),
         not: z
            .union([
               z.coerce.date(),
               z.lazy(() => NestedDateTimeWithAggregatesFilterSchema),
            ])
            .optional(),
         _count: z.lazy(() => NestedIntFilterSchema).optional(),
         _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
         _max: z.lazy(() => NestedDateTimeFilterSchema).optional(),
      })
      .strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const tasksFindFirstArgsSchema: z.ZodType<Prisma.tasksFindFirstArgs> = z
   .object({
      select: tasksSelectSchema.optional(),
      where: tasksWhereInputSchema.optional(),
      orderBy: z
         .union([
            tasksOrderByWithRelationInputSchema.array(),
            tasksOrderByWithRelationInputSchema,
         ])
         .optional(),
      cursor: tasksWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
         .union([
            TasksScalarFieldEnumSchema,
            TasksScalarFieldEnumSchema.array(),
         ])
         .optional(),
   })
   .strict();

export const tasksFindFirstOrThrowArgsSchema: z.ZodType<Prisma.tasksFindFirstOrThrowArgs> =
   z
      .object({
         select: tasksSelectSchema.optional(),
         where: tasksWhereInputSchema.optional(),
         orderBy: z
            .union([
               tasksOrderByWithRelationInputSchema.array(),
               tasksOrderByWithRelationInputSchema,
            ])
            .optional(),
         cursor: tasksWhereUniqueInputSchema.optional(),
         take: z.number().optional(),
         skip: z.number().optional(),
         distinct: z
            .union([
               TasksScalarFieldEnumSchema,
               TasksScalarFieldEnumSchema.array(),
            ])
            .optional(),
      })
      .strict();

export const tasksFindManyArgsSchema: z.ZodType<Prisma.tasksFindManyArgs> = z
   .object({
      select: tasksSelectSchema.optional(),
      where: tasksWhereInputSchema.optional(),
      orderBy: z
         .union([
            tasksOrderByWithRelationInputSchema.array(),
            tasksOrderByWithRelationInputSchema,
         ])
         .optional(),
      cursor: tasksWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
         .union([
            TasksScalarFieldEnumSchema,
            TasksScalarFieldEnumSchema.array(),
         ])
         .optional(),
   })
   .strict();

export const tasksAggregateArgsSchema: z.ZodType<Prisma.TasksAggregateArgs> = z
   .object({
      where: tasksWhereInputSchema.optional(),
      orderBy: z
         .union([
            tasksOrderByWithRelationInputSchema.array(),
            tasksOrderByWithRelationInputSchema,
         ])
         .optional(),
      cursor: tasksWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
   })
   .strict();

export const tasksGroupByArgsSchema: z.ZodType<Prisma.tasksGroupByArgs> = z
   .object({
      where: tasksWhereInputSchema.optional(),
      orderBy: z
         .union([
            tasksOrderByWithAggregationInputSchema.array(),
            tasksOrderByWithAggregationInputSchema,
         ])
         .optional(),
      by: TasksScalarFieldEnumSchema.array(),
      having: tasksScalarWhereWithAggregatesInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
   })
   .strict();

export const tasksFindUniqueArgsSchema: z.ZodType<Prisma.tasksFindUniqueArgs> =
   z
      .object({
         select: tasksSelectSchema.optional(),
         where: tasksWhereUniqueInputSchema,
      })
      .strict();

export const tasksFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.tasksFindUniqueOrThrowArgs> =
   z
      .object({
         select: tasksSelectSchema.optional(),
         where: tasksWhereUniqueInputSchema,
      })
      .strict();

export const tasksCreateArgsSchema: z.ZodType<Prisma.tasksCreateArgs> = z
   .object({
      select: tasksSelectSchema.optional(),
      data: z.union([tasksCreateInputSchema, tasksUncheckedCreateInputSchema]),
   })
   .strict();

export const tasksUpsertArgsSchema: z.ZodType<Prisma.tasksUpsertArgs> = z
   .object({
      select: tasksSelectSchema.optional(),
      where: tasksWhereUniqueInputSchema,
      create: z.union([
         tasksCreateInputSchema,
         tasksUncheckedCreateInputSchema,
      ]),
      update: z.union([
         tasksUpdateInputSchema,
         tasksUncheckedUpdateInputSchema,
      ]),
   })
   .strict();

export const tasksCreateManyArgsSchema: z.ZodType<Prisma.tasksCreateManyArgs> =
   z
      .object({
         data: z.union([
            tasksCreateManyInputSchema,
            tasksCreateManyInputSchema.array(),
         ]),
         skipDuplicates: z.boolean().optional(),
      })
      .strict();

export const tasksCreateManyAndReturnArgsSchema: z.ZodType<Prisma.tasksCreateManyAndReturnArgs> =
   z
      .object({
         data: z.union([
            tasksCreateManyInputSchema,
            tasksCreateManyInputSchema.array(),
         ]),
         skipDuplicates: z.boolean().optional(),
      })
      .strict();

export const tasksDeleteArgsSchema: z.ZodType<Prisma.tasksDeleteArgs> = z
   .object({
      select: tasksSelectSchema.optional(),
      where: tasksWhereUniqueInputSchema,
   })
   .strict();

export const tasksUpdateArgsSchema: z.ZodType<Prisma.tasksUpdateArgs> = z
   .object({
      select: tasksSelectSchema.optional(),
      data: z.union([tasksUpdateInputSchema, tasksUncheckedUpdateInputSchema]),
      where: tasksWhereUniqueInputSchema,
   })
   .strict();

export const tasksUpdateManyArgsSchema: z.ZodType<Prisma.tasksUpdateManyArgs> =
   z
      .object({
         data: z.union([
            tasksUpdateManyMutationInputSchema,
            tasksUncheckedUpdateManyInputSchema,
         ]),
         where: tasksWhereInputSchema.optional(),
      })
      .strict();

export const tasksDeleteManyArgsSchema: z.ZodType<Prisma.tasksDeleteManyArgs> =
   z
      .object({
         where: tasksWhereInputSchema.optional(),
      })
      .strict();
